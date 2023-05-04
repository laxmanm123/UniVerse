from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import *
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

#HOME: function that will handle traffic from the hopepage
# function will return what we want user to see when they are sent to this route

@api_view(['GET', 'POST'])
def get_events(request):
    
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True, context={'request': request})
        return JsonResponse({'Events': serializer.data}, safe=False)
    
    if request.method == 'POST':
        serializer = EventSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def get_users(request):
    if request.method == 'GET':
        user = studentUser.objects.all()
        serializer = studentUserSerializer(user, many=True, context={'request': request})
        return JsonResponse({'StudentUser': serializer.data}, safe=False)
    if request.method == 'POST':
        serializer = studentUser(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view((['GET']))
def get_single_user(request, id):
    if request.method == 'GET':
        user = studentUser.objects.get(pk= id)
        serializer = studentUserSerializer(user, many=True, context={'request': request})
        return JsonResponse({'StudentUser': serializer.data}, safe=False)
    
@api_view(['PUT'])
def edit_post(request, id):
    try:
        user = studentUser.objects.get(pk=id)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = studentUserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
def delete_event(request, id):
    if request.method == 'DELETE':
        event = Event.objects.get(pk=id)
        event.delete()
        # Response['Access-Control-Allow-Origin'] = 'http://localhost:3000/'
        # Response['Access-Control-Allow-Headers'] = 'Content-Type'
        # Response['Access-Control-Allow-Methods'] = 'GET, POST, DELETE'  
        # Response['Access-Control-Allow-Credentials'] = 'true'
        return Response(status=status.HTTP_202_ACCEPTED)


class ReactView(APIView):
    def get(self, request):
        output =  [{
            'author': output.author,
            'id': output.id,
            'eventTitle': output.eventTitle,
            'eventDate': output.eventDate, 
            'location': output.location}  
            for output in React.objects.all]
        return Response(output)
    
    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)



def home(request):
    return HttpResponse('<h1>Blog Home</h1>') 

def about(request):
    return HttpResponse('<h1>About Page</h1>') 

class EventViewSet(viewsets.ModelViewSet): #ModelViewSet: handle GET and POST for Events
    queryset = Event.objects.all().order_by('eventTitle')
    serializer_class = EventSerializer 

class UserViewSet(viewsets.ModelViewSet): #ModelViewSet: handle GET and POST for Events
    queryset = studentUser.objects.all().order_by('id')
    serializer_class = studentUserSerializer 
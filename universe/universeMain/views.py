from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

from rest_framework import viewsets

from .serializers import *
from .models import Event, Tag


# Create your views here.

#HOME: function that will handle traffic from the hopepage
# function will return what we want user to see when they are sent to this route

def home(request):
    return HttpResponse('<h1>Blog Home</h1>') 

def about(request):
    return HttpResponse('<h1>About Page</h1>') 

class EventViewSet(viewsets.ModelViewSet): #ModelViewSet: handle GET and POST for Events
    queryset = Event.objects.all().order_by('eventTitle')
    serializer_class = EventSerializer 

class UserViewSet(viewsets.ModelViewSet): #ModelViewSet: handle GET and POST for Events
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer 



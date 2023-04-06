from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

from .models import Post, Event, Attendee #from models file, import class Post


# Create your views here.

#HOME: function that will handle traffic from the hopepage
# function will return what we want user to see when they are sent to this route

def home(request):
    return HttpResponse('<h1>Blog Home</h1>') 

def about(request):
    return HttpResponse('<h1>About Page</h1>') 

def add_attendee(request, post_id, attendee_id):
    post = Event.objects.get(id=post_id)
    attendee = Attendee.objects.get(id=attendee_id)
    post.attendees.add(attendee)
    post.save()
    return HttpResponse("Attendee added successfully!")


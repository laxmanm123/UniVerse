from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

#HOME: function that will handle traffic from the hopepage
# function will return what we want user to see when they are sent to this route

def home(request):
    return HttpResponse('<h1>Blog Home</h1>') 

def about(request):
    return HttpResponse('<h1>About Page</h1>') 


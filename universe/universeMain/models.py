from django.db import models 
from django.utils import timezone #takes timezone settings into account
from django.contrib.auth.models import User #django aunto generated table (will learn how to edit this later)

class studentUser(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    pronouns = models.CharField(max_length=50)
    age = models.PositiveIntegerField()
    major = models.CharField(max_length=100)
    residential_cluster = models.CharField(max_length=100)
    bio = models.TextField()
    
    def __str__(self):
        return self.username
    
class Event(models.Model):
    #unique NOT NULL id created automatically -> primary key
    author = models.ForeignKey(studentUser, on_delete=models.CASCADE)
    eventTitle = models.CharField(max_length=200, default='')
    eventDate = models.TextField(default='')
    eventTime = models.TextField(default='')
    location = models.TextField(default='')
    maxAttendees = models.IntegerField(default=1)
    attendees = models.ManyToManyField(studentUser, blank=True, related_name='attended_events')
    description = models.TextField(default='')

    def __str__(self):
        return self.eventTitle
    

    
    
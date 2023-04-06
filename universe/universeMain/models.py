from django.db import models 
from django.utils import timezone #takes timezone settings into account
from django.contrib.auth.models import User #django aunto generated table (will learn how to edit this later)

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now) #no paraenthesis because we dont execute function at that point
    author = models.ForeignKey(User, on_delete=models.CASCADE) #foreign key to User table (will use this key to join users with posts)

    def __str__(self):
        return self.title
    
class EventType(models.IntegerChoices):
    club = 0, 'club'
    normal = 1, 'normal'

class Tag(models.Model):
    name = models.CharField(max_length=255)
    
class Event(models.Model):
    #unique NOT NULL id created automatically -> primary key
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    author_username = User.first_name, User.last_name
    eventTitle = models.CharField(max_length=200)
    eventDate = models.DateTimeField()
    location = models.TextField()
    typeOfEvent = models.IntegerField(choices=EventType.choices)
    numberAttendees = models.IntegerField(default=0)
    #attendees = models.ManyToManyField('Attendee', related_name='events_attending')
    attendees = models.ManyToManyField('User', related_name='events_attending')
    tags = models.ManyToManyField('Tag', blank=True)

    def __str__(self):
        return self.eventTitle

class Attendee(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
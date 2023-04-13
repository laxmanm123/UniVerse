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

    def __str__(self):
        return self.name
    
class Event(models.Model):
    #unique NOT NULL id created automatically -> primary key
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    eventTitle = models.CharField(max_length=200)
    eventDate = models.DateTimeField()
    location = models.TextField()
    typeOfEvent = models.IntegerField(choices=EventType.choices)
    numberAttendees = models.IntegerField(default=0)
    tags = models.ManyToManyField('Tag', blank=True)
    attendees = models.ManyToManyField(User, blank=True, related_name='attended_events')

    def __str__(self):
        return self.eventTitle

# class studentUser(models.Model):
#     #id = models.ForeignKey(User, on_delete=models.CASCADE)
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     username = models.CharField(max_length=100)
#     pronouns = models.CharField(max_length=50)
#     age = models.PositiveIntegerField()
#     major = models.CharField(max_length=100)
#     residential_cluster = models.CharField(max_length=100)
#     bio = models.TextField()

# class clubUser(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     username = models.CharField(max_length=100)


from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

#serializers.py converts our data into json form

class studentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = studentUser
        fields = ('id', 'username', 'fname', 'lname', 'pronouns', 'age', 'major', 'residential_cluster', 'bio')

class EventSerializer(serializers.HyperlinkedModelSerializer):
    # author = UserSerializer()
    attendees = serializers.StringRelatedField(many=True)
    class Meta:
        model = Event
        fields = ('id',
                  'author',
                  'eventTitle',
                  'eventDate',
                  'eventTime',
                  'location',
                  'description',
                  'attendees',
                  'maxAttendees')
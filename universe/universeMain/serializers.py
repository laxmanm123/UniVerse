from rest_framework import serializers
from .models import Event, Tag
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class EventSerializer(serializers.HyperlinkedModelSerializer):
    #user = UserSerializer()
    #user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Event
        fields = ('eventTitle', 'eventDate', 'location', 'typeOfEvent')
        
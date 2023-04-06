from django.contrib import admin

# Register your models here.

#registering my databse models:
from .models import Post, Event, Attendee
admin.site.register(Post)
admin.site.register(Event)
admin.site.register(Attendee)


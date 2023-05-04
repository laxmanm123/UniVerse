from django.contrib import admin

# Register your models here.

#registering my databse models:
from .models import Event, studentUser
admin.site.register(Event)
admin.site.register(studentUser)
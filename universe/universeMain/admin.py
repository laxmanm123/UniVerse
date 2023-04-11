from django.contrib import admin

# Register your models here.

#registering my databse models:
from .models import Event, Tag
admin.site.register(Event)
admin.site.register(Tag)


from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title







# from django.db import models
# from django.contrib.auth.models import User

# class Post(models.Model):
#     title = models.CharField(max_length=255),
#     location = models.CharField(max_length=255),
#     content = models.TextField(),
#     #created_at = models.DateTimeField(auto_now_add=True) #current date time when obj is created
#    #last_modified = models.DateTimeField(auto_now=True) #current date time when obj is edited
#     author = models.ForeignKey(User, on_delete=models.CASCADE) #if user that created post gets deleted -> delete all posts

# #     def __str__(self):
# #         return self.title

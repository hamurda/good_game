from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.TextField(max_length=20)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    is_admin = models.BooleanField(default='false')

    def __str__(self):
        return self.username

    class Meta:
        ordering = ['username']

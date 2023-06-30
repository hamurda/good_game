from django.db import models

class Platform(models.Model):
    name = models.CharField(max_length=100)
    games_count = models.PositiveIntegerField(default=0)
    image = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

class Genre(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=600)
    games_count = models.PositiveIntegerField(default=0)
    image = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

class Publisher(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=600)
    games_count = models.PositiveIntegerField(default=0)
    image = models.TextField()

    def __str__(self):
        return self.name


class Game(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=600)
    release_date = models.DateField()
    image = models.TextField()
    genre = models.ForeignKey(Genre, on_delete=models.PROTECT)
    publisher = models.ForeignKey(Publisher, on_delete=models.PROTECT)
    platforms = models.ManyToManyField(Platform)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


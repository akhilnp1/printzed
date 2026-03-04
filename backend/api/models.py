from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class PortfolioItem(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='portfolio/')

    def __str__(self):
        return self.title

class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    image = models.ImageField(upload_to='team/')
    is_coo = models.BooleanField(default=False)
    message = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    review = models.TextField()
    rating = models.IntegerField(default=5)
    image = models.ImageField(upload_to='reviews/', blank=True, null=True)

    def __str__(self):
        return self.name

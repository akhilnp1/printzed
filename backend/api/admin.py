from django.contrib import admin
from .models import Service, PortfolioItem, TeamMember, Review

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']

@admin.register(PortfolioItem)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['title', 'category']

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'is_coo']

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['name', 'rating']

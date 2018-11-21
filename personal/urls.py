from django.urls import path
from .views import HomePageView, CalculatorPageView


urlpatterns = [
	path('calculator/', CalculatorPageView.as_view(), name='calculator'),
	path('', HomePageView.as_view(), name='home')
]
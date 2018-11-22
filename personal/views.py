from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here.
class HomePageView(TemplateView):
	template_name = 'home.html'

class CalculatorPageView(TemplateView):
	template_name = 'calculator.html'

class JSObjectPageView(TemplateView):
	template_name = 'object.html'

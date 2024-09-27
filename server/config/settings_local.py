DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'shopdb',
        'USER': 'ROOT',
        'PASSWORD': '2010665KE',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173'
]

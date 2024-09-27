from rest_framework.pagination import PageNumberPagination


class ShopListPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param = 'shop_page_size'
    max_page_size = 8

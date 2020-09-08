# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

class StaticContent(http.Controller):

    @http.route(["/about-us"], type='http', auth="public", website=True)
    def about_us_page(self, **kwargs):
        return request.render('theme_clarico.about_us_template', {})

    @http.route(["/privacy-policy"], type='http', auth="public", website=True)
    def privacy_policy_page(self, **kwargs):
        return request.render('theme_clarico.privacy_policy_template', {})

    @http.route(["/term-condition"], type='http', auth="public", website=True)
    def term_condition_page(self, **kwargs):
        return request.render('theme_clarico.term_condition_template', {})

    @http.route(["/return-exchange"], type='http', auth="public", website=True)
    def return_exchange_page(self, **kwargs):
        return request.render('theme_clarico.return_exchange_template', {})

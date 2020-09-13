# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

class StaticContent(http.Controller):

    @http.route(["/be-a-partner"], type='http', auth="public", website=True)
    def be_a_partner_page(self, **kwargs):
        return request.render('theme_clarico.be_a_partner_template', {})

    @http.route(["/services"], type='http', auth="public", website=True)
    def services_page(self, **kwargs):
        return request.render('theme_clarico.service_template', {})

    @http.route(["/career"], type='http', auth="public", website=True)
    def career_page(self, **kwargs):
        return request.render('theme_clarico.career_template', {})

    @http.route(["/about-us"], type='http', auth="public", website=True)
    def about_us_page(self, **kwargs):
        return request.render('theme_clarico.about_template', {})

    @http.route(["/privacy-policy"], type='http', auth="public", website=True)
    def privacy_policy_page(self, **kwargs):
        return request.render('theme_clarico.privacy_policy_template', {})

    @http.route(["/term-condition"], type='http', auth="public", website=True)
    def term_condition_page(self, **kwargs):
        return request.render('theme_clarico.term_condition_template', {})

    @http.route(["/contact-us"], type='http', auth="public", website=True)
    def contactus_page(self, **kwargs):
        return request.render('theme_clarico.contactus_template', {})

    @http.route(["/partner-brands"], type='http', auth="public", website=True)
    def partner_brand_page(self, **kwargs):
        return request.render('theme_clarico.partner_brands_template', {})

    @http.route(["/key-benefits"], type='http', auth="public", website=True)
    def key_benefits_page(self, **kwargs):
        return request.render('theme_clarico.key_benefits_template', {})

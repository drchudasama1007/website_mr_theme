# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website


class StaticContent(http.Controller):

    @http.route(["/be-a-partner"], type='http', auth="public", website=True)
    def be_a_partner_page(self, **kwargs):
        if kwargs.get('name'):
            lead = request.env['crm.lead'].sudo().create({
                'contact_name': 'Be A Partner',
                'name': kwargs.get('name'),
                'phone' : kwargs.get('phone'),
                'email_from' : kwargs.get('email'),
                'description' : kwargs.get('message'),
            })
        return request.render('theme_clarico.be_a_partner_template', {})

    @http.route(["/services"], type='http', auth="public", website=True)
    def services_page(self, **kwargs):
        blogs = request.env['blog.post'].sudo().search([])
        return request.render('theme_clarico.service_template', {'blogs':blogs})

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

    @http.route(["/cookie"], type='http', auth="public", website=True)
    def cookie_page(self, **kwargs):
        return request.render('theme_clarico.cookie_policy_template', {})


    @http.route(["/contactus-submit"], type='http', auth="public", website=True)
    def contactus_submit_page(self, **kwargs):
        if kwargs.get('name'):
            lead = request.env['crm.lead'].sudo().create({
                'contact_name': kwargs.get('name'),
                'name': kwargs.get('subject'),
                'phone' : kwargs.get('phone'),
                'email_from' : kwargs.get('email'),
                'description' : kwargs.get('message'),
            })
        return request.redirect('/contactus-thank-you')

    @http.route(["/partner-brands"], type='http', auth="public", website=True)
    def partner_brand_page(self, **kwargs):
        return request.render('theme_clarico.partner_brands_template', {})

    @http.route(["/key-benefits"], type='http', auth="public", website=True)
    def key_benefits_page(self, **kwargs):
        return request.render('theme_clarico.key_benefits_template', {})

    @http.route(["/request-submit"], type='http', auth="public", website=True)
    def request_submit_page(self, **kwargs):
        if kwargs.get('name'):
            lead = request.env['crm.lead'].sudo().create({
                'contact_name': 'Request A Quoto',
                'name': kwargs.get('name'),
                'phone': kwargs.get('phone'),
                'email_from': kwargs.get('email'),
                'description': kwargs.get('message'),
            })
        return request.redirect('/contactus-thank-you')

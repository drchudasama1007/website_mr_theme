from odoo import models
from odoo.http import request

class theme_utils(models.AbstractModel):
    _inherit = 'theme.utils'
    
    
    def _theme_clarico_post_copy(self, mod):
        self.disable_view('website_theme_install.customize_modal')


class Website(models.Model):
    _inherit = 'website'

    def get_letest_news(self):
        blogs = request.env['blog.post'].sudo().search([])
        res = {'blogs': blogs, }
        return res
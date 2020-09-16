from odoo import api, fields, models
from odoo.tools.translate import html_translate


class BlogPostInheit(models.Model):
    _inherit = "blog.post"

    tags_name = fields.Char('Tags Name', compute='_compute_tags_name')

    @api.depends('tag_ids')
    def _compute_tags_name(self):
        for rec in self:
            if rec.tag_ids:
                tag_name = ''
                tag_len = len(rec.tag_ids)
                for tag in rec.tag_ids:
                    tag_name = tag_name + tag.name
                    tag_len = tag_len - 1
                    if tag_len > 0:
                        tag_name = tag_name + ', '
                rec.tags_name = tag_name
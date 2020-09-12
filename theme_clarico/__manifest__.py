{
    # Theme information
    'name': 'Theme Clarico',
    'category': 'Theme/Basic',
    'summary': 'Fully Responsive Odoo Theme',
    'version': '12.0.0.52',
    'license': 'OPL-1',	
    'depends': [
      'base','website','website_theme_install','snailmail_account'
    ],

    'data': [
		'templates/assets.xml',
		'templates/emipro_custom_snippets.xml', 
        'templates/odoo_default_snippets.xml',
        'templates/be_a_partner.xml',
        'templates/homepage.xml',
        'templates/aboutus.xml',
        'templates/career.xml',
        'templates/privacy_policy.xml',
        'templates/term_condition.xml',
        'templates/services.xml',
        'templates/partner_brand.xml',
        'templates/login.xml',
        'templates/theme_customise_option.xml',
		'templates/404.xml',
        'templates/header.xml',
        'templates/footer.xml',
        'templates/customize.xml',
        'templates/menu_config.xml',
        'templates/slider.xml',
        'templates/contactus.xml',
    ],

    'images': [
        'static/description/main_poster.jpg',
        'static/description/main_screenshot.gif',
    ],
    
    # Author
    'author': 'Bansi',
    'installable': True,
    'auto_install': False,
}

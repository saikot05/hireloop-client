import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tgd6ZQatDsAcbtsDhxvel11',
    'seeker_premium': 'price_1Tgft1QatDsAcbts2eP68txD',
    'recruiter_growth': 'price_1TgfvJQatDsAcbtsH5Ra8RoS',
    'recruiter_enterprise': 'price_1TgfxBQatDsAcbtslETPW7Py'
}
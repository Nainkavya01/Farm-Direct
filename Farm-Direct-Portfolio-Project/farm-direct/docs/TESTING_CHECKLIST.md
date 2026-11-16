# Testing checklist

## Website
- [ ] Header navigation and mobile menu work by mouse and keyboard.
- [ ] Search matches product name and category.
- [ ] Category filters combine correctly with search.
- [ ] Empty state appears when there are no matches.
- [ ] Add-to-basket updates quantity and subtotal.
- [ ] Remove item updates basket and subtotal.
- [ ] Cart closes with close button, backdrop and Escape.
- [ ] Layout checked at 360px, 768px, 1024px and desktop widths.
- [ ] Browser console has no errors.

## Expo app
- [ ] App starts in Expo Go or Android emulator.
- [ ] Tabs navigate between Home, Basket and Profile.
- [ ] Search and category filters work.
- [ ] Add and decrement quantity work.
- [ ] Basket subtotal updates and zero quantity removes item.
- [ ] No sensitive data is collected or persisted.

## Before claiming production readiness
- [ ] API integration tested against a real development server.
- [ ] Authentication and authorization tested.
- [ ] Error, loading, offline and empty states tested.
- [ ] Android physical-device testing completed.
- [ ] Payment sandbox tested; never claim live payment before verification.

import React from 'react';

const plansData = [
  {
    title: 'Free Package',
    price: 0,
    priceText: '0/month',
    features: [
      '5 Dog Walk',
      '3 Vet Visit (Unavailable)',
      '3 Pet Spa (Unavailable)',
      'Free Supports (Unavailable)',
      'Customer Support (Unavailable)'
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'btn-outline-border',
  },
  {
    title: 'Standard Package',
    price: 39,
    priceText: '39/month',
    discount: 'Save 10%',
    features: [
      '5 Dog Walk',
      '3 Vet Visit (Unavailable)',
      '3 Pet Spa (Unavailable)',
      'Free Supports (Unavailable)',
      'Customer Support (Unavailable)'
    ],
    buttonText: 'Get Started',
    buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
    textStyle: 'text-white',
    cardStyle: 'shadow-lg transform scale-105 z-10'
  },
  {
    title: 'Pro Package',
    price: 89,
    priceText: '89/month',
    features: [
      '5 Dog Walk',
      '3 Vet Visit (Unavailable)',
      '3 Pet Spa (Unavailable)',
      'Free Supports (Unavailable)',
      'Customer Support (Unavailable)'
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'btn-outline-border',
  },
];

const Plans = () => {
  return (
    <section className="bg-gray-50 py-10" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-blue-600 text-lg font-semibold mb-2">Our Plans</h6>
          <h3 className="text-4xl font-light">Affordable Packages</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-8 text-center ${plan.cardStyle || ''}`}
            >
              {plan.discount && (
                <div className="mb-6">
                  <h5 className="text-sm font-bold uppercase text-blue-600 bg-white rounded-lg inline-block py-1 px-4 mb-4">
                    {plan.discount}
                  </h5>
                </div>
              )}
              <div className="mb-6">
                <h6 className="text-lg font-semibold mb-3">{plan.title}</h6>
                <h4 className={`text-3xl font-bold ${plan.textStyle || ''}`}>
                  <span className="text-2xl align-top">$</span>
                  {plan.price}
                  <span className="text-base text-gray-500">/{plan.priceText}</span>
                </h4>
              </div>
              <ul className={`space-y-3 mb-6 ${plan.textStyle || ''}`}>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-lg ${feature.includes('(Unavailable)') ? 'line-through text-gray-400' : ''}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`py-2 px-6 border border-gray-300 rounded-lg ${plan.buttonStyle}`}
                href="#buy"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

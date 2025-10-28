import React from 'react';

export const FruitIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 10.322c.382.23.688.591.895 1.052s.228.988.043 1.513c-.185.525-.536.95-1.002 1.217s-1.026.354-1.564.232c-.538-.122-1.002-.45-1.292-.907s-.37-1.028-.215-1.583c.155-.555.52-1.021.998-1.328a2.6 2.6 0 0 1 1.56-.226c.552.096 1.066.398 1.422.86l.5-.866a4.13 4.13 0 0 0-2.268-1.373c-.878-.204-1.812-.04-2.585.451a4.22 4.22 0 0 0-1.865 2.152c-.45 1.082-.416 2.33.09 3.336s1.35 1.764 2.535 2.053c1.185.289 2.45-.038 3.385-.81a4.22 4.22 0 0 0 1.528-2.914c.153-1.216-.304-2.45-1.2-3.232l-.5.866z" />
        <path d="M17.5 4.5c.34-.59.78-1.17 1.3-1.5" />
        <path d="M19.38 3.38c.32.18.63.4.92.64" />
        <path d="M22 7c-1.42.06-2.56.88-3.32 1.93" />
        <path d="m14 14 5-5" />
    </svg>
);

export const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
);

export const StoreIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        <path d="M2 7h20" />
        <path d="M22 7v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V7" />
        <path d="M2 7v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7" />
    </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m15 18-6-6 6-6" />
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6 9 17l-5-5" />
    </svg>
);
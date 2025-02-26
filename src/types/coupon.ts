export interface ICoupon {
    code: string;
    discountType: 'Flat' | 'Percentage';
    discountValue: number;
    maxDiscountAmount?: number;
    startDate: string;
    endDate: string;
    minOrderAmount: number;
 }
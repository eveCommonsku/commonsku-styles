import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type CommunityIconProps = SVGIconProps;
export default function CommunityIcon({
    size="medium",
    altText="Community",
    ...props
}: CommunityIconProps) {
    return <SVG size={size} aria-labelledby="CommunityIcon" {...props}>
        <title id="CommunityIcon" >{altText}</title>
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5BBDEC"/>
        <path d="M13.6999 18.6333V17.9C13.6999 16.9333 12.9333 16.1666 11.9999 16.1666H11.9666C11.0333 16.1666 10.2999 16.9333 10.2999 17.8666V18.6333H6.49994C6.23328 18.6333 6.03328 18.4333 6.03328 18.1666V14.0333H5.26661C4.13328 14.0333 3.23328 13.1333 3.23328 12C3.23328 10.8666 4.16661 9.96664 5.26661 9.96664H6.03328V5.8333C6.03328 5.56664 6.23328 5.36664 6.49994 5.36664H10.2999V6.1333C10.2999 7.06664 11.0666 7.8333 11.9999 7.8333C12.9333 7.8333 13.6999 7.06664 13.6999 6.1333V5.36664H17.4999C17.7666 5.36664 17.9666 5.56664 17.9666 5.8333V9.96664H18.7333C19.8666 9.96664 20.7666 10.8666 20.7666 12C20.7666 13.1333 19.8666 14.0333 18.7333 14.0333H17.9666V18.1666C17.9666 18.4333 17.7666 18.6333 17.4999 18.6333H13.6999Z" fill="white"/>
        <path d="M6.49998 5.53335H10.1333V6.13335C10.1333 7.16668 10.9667 8.00001 12 8.00001C13.0333 8.00001 13.8666 7.16668 13.8666 6.13335V5.53335H17.5C17.6667 5.53335 17.8 5.66668 17.8 5.83335V10.1333H18.7333C19.7667 10.1333 20.6 10.9667 20.6 12C20.6 13.0333 19.7667 13.8667 18.7333 13.8667H17.8V18.1667C17.8 18.3333 17.6667 18.4667 17.5 18.4667H13.8666V17.9C13.8666 16.8667 13.0333 16 12 16H11.9667C10.9333 16 10.1333 16.8333 10.1333 17.8667V18.4667H6.49998C6.33332 18.4667 6.19998 18.3333 6.19998 18.1667V13.8667H5.26665C4.23332 13.8667 3.39998 13.0333 3.39998 12C3.39998 10.9667 4.23332 10.1333 5.26665 10.1333H6.19998V5.83335C6.19998 5.66668 6.33332 5.53335 6.49998 5.53335ZM6.49998 5.20001C6.16665 5.20001 5.86665 5.46668 5.86665 5.83335V9.80001H5.26665C4.03332 9.80001 3.06665 10.8 3.06665 12C3.06665 13.2333 4.06665 14.2 5.26665 14.2H5.86665V18.1667C5.86665 18.5 6.13332 18.8 6.49998 18.8H10.1333H10.4667V18.4667V17.8667C10.4667 17.0333 11.1333 16.3333 11.9667 16.3333H12C12.8333 16.3333 13.5333 17.0667 13.5333 17.9V18.4667V18.8H13.8666H17.5C17.8333 18.8 18.1333 18.5333 18.1333 18.1667V14.2H18.7333C19.9667 14.2 20.9333 13.2 20.9333 12C20.9333 10.7667 19.9333 9.80001 18.7333 9.80001H18.1333V5.83335C18.1333 5.50001 17.8667 5.20001 17.5 5.20001H13.8666H13.5333V5.53335V6.13335C13.5333 6.96668 12.8333 7.66668 12 7.66668C11.1667 7.66668 10.4667 6.96668 10.4667 6.13335V5.53335V5.20001H10.1333H6.49998Z" fill="#5BBDEC"/>
        <path d="M12 12.2C12.7916 12.2 13.4333 11.5583 13.4333 10.7666C13.4333 9.97504 12.7916 9.33331 12 9.33331C11.2084 9.33331 10.5667 9.97504 10.5667 10.7666C10.5667 11.5583 11.2084 12.2 12 12.2Z" fill="#5BBDEC"/>
        <path d="M14.5333 14.6667H9.46667C9.46667 13.2667 10.6 12.1334 12 12.1334C13.4 12.1334 14.5333 13.2667 14.5333 14.6667Z" fill="#5BBDEC"/>
    </SVG>
}
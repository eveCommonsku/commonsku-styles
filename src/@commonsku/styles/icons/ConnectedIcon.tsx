import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type ConnectedIconProps = SVGIconProps;
export default function ConnectedIcon({
    size="medium",
    altText="Connected",
    ...props
}: ConnectedIconProps) {
    return <SVG size={size} aria-labelledby="ConnectedIcon" {...props}>
        <title id="ConnectedIcon" >{altText}</title>
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0F6EA6"/>
        <path d="M9.06661 16.1334V15.7C9.06661 14.9667 8.46661 14.3334 7.73328 14.3334C6.96661 14.3334 6.33328 14.9667 6.33328 15.7334V16.1334H3.73328V8.30002C3.73328 8.26669 3.76661 8.20002 3.83328 8.20002H6.66661V7.43336C6.66661 6.86669 7.13328 6.40002 7.66661 6.40002C8.23328 6.40002 8.73328 6.90002 8.73328 7.46669V8.20002H11.5999C11.6333 8.20002 11.6666 8.23336 11.6666 8.26669V10.8H11.2666C10.8999 10.8 10.5333 10.9667 10.2666 11.2334C9.99994 11.5 9.86661 11.8334 9.86661 12.2C9.86661 12.9334 10.4999 13.5334 11.2333 13.5334H11.6666V16.0667C11.6666 16.1 11.6333 16.1334 11.5999 16.1334H9.06661Z" fill="white"/>
        <path d="M7.69998 6.23334V6.56667C8.16665 6.56667 8.56665 6.96667 8.56665 7.46667V8.03334V8.36667H8.89998H11.5V10.6333H11.2667C10.8333 10.6333 10.4333 10.8 10.1333 11.1C9.83332 11.4 9.69998 11.7667 9.69998 12.2C9.69998 13.0333 10.4 13.7 11.2333 13.7H11.5V15.9667H9.23332V15.7C9.23332 14.8667 8.56665 14.2 7.73332 14.1667H7.69998C6.86665 14.1667 6.16665 14.8667 6.16665 15.7333V15.9667H3.89998V8.36667H6.49998H6.83332V8.03334V7.43334C6.83332 6.96667 7.19998 6.56667 7.66665 6.56667V6.23334M7.69998 6.23334C7.69998 6.23334 7.66665 6.23334 7.69998 6.23334C7.03332 6.23334 6.49998 6.76667 6.49998 7.43334V8.03334H3.83332C3.69998 8.03334 3.56665 8.13334 3.56665 8.3V16.3H6.49998V15.7333C6.49998 15.0667 7.03332 14.5 7.69998 14.5C7.69998 14.5 7.69998 14.5 7.73332 14.5C8.39998 14.5 8.89998 15.0333 8.89998 15.7V16.3H11.6C11.7333 16.3 11.8333 16.2 11.8333 16.0667V13.3667H11.2333C10.5667 13.3667 10.0333 12.8333 10.0333 12.2C10.0333 11.5333 10.6 10.9667 11.2667 10.9667H11.8333V8.26667C11.8333 8.13334 11.7333 8.03334 11.6 8.03334H8.89998V7.46667C8.89998 6.8 8.36665 6.23334 7.69998 6.23334Z" fill="#0F6EA6"/>
        <path d="M17.3333 16.1333V15.7C17.3333 14.9333 16.7333 14.3333 15.9666 14.3333C15.2 14.3333 14.6 14.9333 14.6 15.7V16.1333H12V13.3667V13.2H11.2333C10.6666 13.2 10.2 12.7333 10.2 12.1667C10.2 11.6 10.6666 11.1333 11.2333 11.1333H12V8.23335L14.6 8.20001V8.60001C14.6 9.36668 15.2 10 15.9666 10C16.7333 10 17.3333 9.36668 17.3333 8.63335V8.20001H19.9L19.9333 10.9667V11.1333H20.7C21.2666 11.1333 21.7333 11.6 21.7333 12.1667C21.7333 12.7333 21.2666 13.2 20.7 13.2H19.9333V16.1L19.9 16.1333H17.3333Z" fill="white"/>
        <path d="M19.7667 8.36666V10.9667V11.3H20.1H20.7C21.1667 11.3 21.5667 11.7 21.5667 12.1667C21.5667 12.6333 21.1667 13.0333 20.7 13.0333H20.1H19.7667V13.3667V15.9667H17.5V15.7C17.5 14.8667 16.8 14.1667 15.9667 14.1667C15.1333 14.1667 14.4333 14.8667 14.4333 15.7V15.9667H12.1667V13.3667V13.0333H11.8333H11.2333C10.7667 13.0333 10.3667 12.6333 10.3667 12.1667C10.3667 11.7 10.7667 11.3 11.2333 11.3H11.8333H12.1667V10.9667V8.36666H14.4333V8.59999C14.4333 9.46666 15.1333 10.1667 15.9667 10.1667H16C16.8333 10.1667 17.5 9.46666 17.5 8.63332V8.36666H19.7667ZM19.9 8.03333H17.1667V8.63332C17.1667 9.29999 16.6333 9.83333 16 9.83333H15.9667C15.3 9.83333 14.7667 9.26666 14.7667 8.59999V8.03333H12C11.9 8.03333 11.8 8.09999 11.8 8.23333V10.9667H11.2C10.5333 10.9667 10 11.5 10 12.1667C10 12.8333 10.5333 13.3667 11.2 13.3667H11.8V16.1C11.8 16.2 11.8667 16.3 12 16.3H14.7333V15.7C14.7333 15.0333 15.2667 14.5 15.9333 14.5C16.6 14.5 17.1333 15.0333 17.1333 15.7V16.3H19.8667C19.9667 16.3 20.0667 16.2333 20.0667 16.1V13.3667H20.6667C21.3333 13.3667 21.8667 12.8333 21.8667 12.1667C21.8667 11.5 21.3333 10.9667 20.6667 10.9667H20.0667V8.23333C20.1 8.13333 20 8.03333 19.9 8.03333Z" fill="#0F6EA6"/>
    </SVG>
}
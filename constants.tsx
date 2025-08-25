import React from 'react';
import type { Message } from './types';

// --- UTILITIES & COMPONENTS ---

const generateRandomPhoneNumber = () => {
    const countryCode = '+1'; 
    const areaCode = Math.floor(Math.random() * (999 - 200 + 1) + 200);
    const firstPart = Math.floor(Math.random() * (999 - 200 + 1) + 200);
    const secondPart = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    return `${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};

const VoiceMessage = ({ duration }: { duration: string }) => (
    <div className="flex items-center w-48">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white bg-green-500 rounded-full p-1 mr-2 flex-shrink-0">
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125a.375.375 0 0 1 .375-.375h6.75a.375.375 0 0 1 .375.375V4.125a.375.375 0 0 1-.375.375h-6.75a.375.375 0 0 1-.375-.375V4.125Z" clipRule="evenodd" />
        </svg>
        <div className="flex-grow h-1 bg-gray-300 rounded-full relative">
            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded-full w-3/4"></div>
            <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2"></div>
        </div>
        <span className="text-xs text-gray-500 ml-2">{duration}</span>
    </div>
);

const allImageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFzSk3abjntk8lLi0kjNQogvnQ2m3wPHwkg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3SWOn_WeScRw5SaTH4w1bbt4mHR3rU6oog&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZyhiT9niTht9TC8e46qJ1trPC2Bcs0AUlw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q556HusGUTiGRRXcf_c0ZoeB4HSpDwN8LCpUZ_JfaSVPLt4No8zCPmA7&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEnK_56NHPb-N2xrmxGuW7ItXcPdcfkFRKg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo8M_xbvVlfh4lQVgPuNTERMlO_lEppFoSw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9OjJ5dxgP87BeZ9Q-Xin-YX-ajcX0y5-TQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDhW0bOCN8rhLk-S8GWos-t_hvJtBXERx_g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOaSqA15oVoFDdknObWAe-DvJioiPlWTXwA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrwP0RwusUPCfP9vLaRn9786KkApGDx4IoYeChim0TzLU9Bv2K-O_FRA_&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATvMP0NSmhH97zUTuqzkXipcF4iq21XVwkpbIRjTlDyNRZPSOMI7j88H6&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEpUGnNG8I4Qzhtlj3kWxeGJAVOmdVPexMA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAsaFdwiJDUqs7VPkCaYRC9jJ8LkYg3B3LCA22flcz7jT0xlwGr-Zrxs&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSg7Ws2CSlr5wYbkBHO8NTdk4jwF3PdpNhJxZvbeHz3TdpqfN6MmROxCR9&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfnXlV43KA6OSplW8FJ4R0WTFSiYTTfc-Dw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOeLKLzHpbtRfS1iR-NliM4guejZhSsDxXg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hNh3Lk1__XSSdGSy1pSHHS3-Zmd_H7yu-g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgzvbiXFO99Y_FNRjx6VztudI0kIONLheNA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-DBoVonB4NnwMvH41kguVGCr4UQXhvMG1g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dETkzoRQsrMLiAsvZ8GAX7aD_0Z3P51fCQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcIoih5hd7zWskNsdlc1KcnJfOqiWiMJMww&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TS9NXnYcUyFrOjxUsZETUIGH6TxeLqbl7LPkA6SlBwNOQ0v6zUDRvxM&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r52J-OFBc2r5sh-Nybm1f7C_eL1t_XsV2Q&usqp=CAU',
    'https://lh3.googleusercontent.com/proxy/PkO3rDNJ45xahRWcikpAUWaZrWxfqZtoeHh_Wt5ivmnRhrrodJD5xfCWlCnhH0NOvR1wP_-NfzDEEpUbluUW278gQvxp7Z48UQfEKBOPE5T-_A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFypp9unvUigLqVEKedNYml9dxr1g2FtKnBw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOI2nl2jHn0tBWS1e33y4IOvYJ7nUAX8uZw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVhN2N9IhpNXnE6vk3XIHe37-Y4-HNO0L0Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mU441TfMGxh7uycTm7UjQCqHv4j1SCydxw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4q-0XTafAIJNa1fOz9rSX8f2fEQd6RJQKw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4oYLt8XzQXLKyKMD41CfcN1FpdxYXv52wA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoBJ1R5MRQFiSmfmxxfyMefmo8AK7MYFtLQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIoeRwD_tmn7kO9yElyHQaoEdEoMHLsrZRg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL8XSvt9A5jvQqhS3eHmXTam37EpGp4klLg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHLt61ExFzrzjJOwLrFcCokYOh_eRKjhwyw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hctqh5I3SYC-hRqvpAVgYiMXb3eXLPK98Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwyLsl0_3F6Thtjr8ayATF8UhDYhIhgaJsQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLVwnVovHPuOownytsSCVQKN9ifif8xJz_g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAlDPy5mbEPwg8h1C0oAocDiXSsa8zDZX4w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SPYWs0AyoIvxQX_p_b4yqB2SIKiPrko4tg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jOx44eEAD_R4U9SwgdlSTE135s3GFdIs1w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPtx8cVmCavahCzbnHThcme1NDdqYLAN1aA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KEY2HXWv0H4HFJwLQNIByu6eNjYHTJp3iA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHZqDDo9U-gSF4qfwrFWRSwpXkAS0tszpXQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljh2QWrLo9KY5vaO79w6xmUpAZZ29U1RcNg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rZyIA1FFcCZtYd-T92FOQZ0Vm4XgCEdWCA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P2fYUUbG4cWPJx801BYZVONTrdVqyzX57A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcKflNf7DzN4WNYphn1uIupIDFxgtDShu0w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Sac5yCvP28f-hjsjxw-HIhkfe21nXCjFRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWO_BNbiROx6zcWdpnj7TT3aWCbNKnigfBXw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlbFvF_I5eP0hMnJQo3VJgF1CHo0M4adxeQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcQTQtBf_0mC-5cH8ApSQXR2XVcXW3EeZdw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Igd_sAw8GulyHl8NCnDL41OvcPLIa0kHHw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRj-xutjHGMAnNUi_vvrLxn4f9oVpR-k6vWA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fkfkb9xVzedgBuIFoNThM4rJ-1Vda-7j5Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCERd7D4hNCgFL29iAihvvpKWLh4Gmu35kdQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VQf8oMaTShZTNS7HGCdQH8W-QcL9bxrJJg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaYZ1Dn1SXWYfEXS_BPaqkh-aV7bx3UFkig&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRx9N7j0flwFMwB1Fch5x0s_WOxrh2AMINw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Udcbb4xsAhaLfjSDT24m2vkeEZyn8XLs7A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdNX_rUkvo7Cg67441WW7ifAI4bRzYgPLsA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQEgmqCq3-XI5UTQLauwiyK-Z8J-VVYoOgQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShyj7xOYwxa-qrp1Z4MxVqTkXk5faLZpsCw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCL9njdTwbpAZjAu_BKPhzEbFdLQWeAlQ0Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKbviKFo8-U13A4RVRdYOi2yCEHMe0nVPIg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnAVIc2Qyqh9jC3Rl2tZax6NLE3FApskZPQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo50SY967Qc2ZWq-a6u902XeB2kO55VGQAIA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvf8fqa0wTAOj4VRGzZVg_qk8ZGGjU13pOQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoEbWHDm29LFyQGMUicW4ZKeVhbifj7IldA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWlHHPJ78Lb2tW29iZel5Cj7SRUCYjG_dOQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuT_ux-tsRBUocYrdk3MDhSmpXyofjy9MgQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_v3GWkgvcJO_4k2rJc4kWOKJI2HLwTGZbA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrI3AL4lVk5gKonBIrztEPhQpTjcPn5ZdAQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iKgtJNV063nb8wG6hLqMaFqxTIpf01_g-g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzC6LEmumQaFtUYGWkk9b3g-UcCY8jfELugg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBHGTq7J6Er7E6taiJHaz6FID-8ryhBPc7g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R5KDEosC0c1pl-rN6_ATI_5qsq8xSjhZkw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4XecPwp0qb_uOFiKzyYxJuO4_QfynFtMNA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVgfeG79S7WwGTO3WXzcJ2j_amrXkHykcRA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJZ4Bt0qxNIvzk6MNQnTyTEhf6FlLDALSuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjz9ombGj6JuXK44wbX3A2j1dSwMSAuXqkTw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkt0AyZgwSNVgyMRf9pAj-n5H68mQrgKEEvA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrD-WpoqqGJc1Bjfi09YG4ASKHIQIHWA-WQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwB7HWaB1whZ9OwjMPPydpzFyx0dOLgbH82w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bM55vXTt5zL7T7oWqH8UgQTF4qkzBERH-w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMn1XeDgufVYJag0m1ScKyGvhZ-6VWlB4hA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJV3LrFkMhq69vJV8odiOJiKfm92RwO_kAOA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovxdohY2NeB43U4u5yRj5RX67RKQd-PGgeQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDKmcso9ivQJhHAxJkQ90PfO6k8-E-Unz3A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVWMdtX-WTsglvqyvxpdd_ncO6dZHKPhfWQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZyvTIk_wX-RyFqVq6PsCVvQ43DzDg1gF0g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18rjV61pf-Kkw93P8fo_GMD9Idv57BgQegA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwk28fGpCeiOnU_v4gM_xmmutlD4TdTaJNIBnnakQuc9oBcMJBSFomlvD&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSF3B1t8IKJ8SackXZ34Ul844J8t89K_fraw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqt2QSj2E9P9E8qneWPqKN-Y9sTrRgFqgLeQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGH0eM6A3qIBu1SoHO2WKLiYXCVits4u_Wg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0nVbVAyDMiNgAOJSyFMdr9JgXP6u-tnRjg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPri27yFhlF-MAVeozZ00A-tp5r8oH4QZLQA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZtN2Z8Y0VCub7HXy1a1FNbkwA632bWbfQQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgddTyJCjtmFXq-XYPADnuA_j2bhPr-iCFw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzgVzG-UrcWB6i_pXRDZetIab4RVeGY6LfQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig5Z4r9Na7WtvWMcPhMRWO-vxYITQxnGTEA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBmNSSTyzY6qNUNXh3PWEO2voLlLDTFW6RA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWtvsoXkUSxr4FhGEWif36fdhmQ3WYrsaSA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJdpCFIUFCozbAI1zxuOH8bdgzQ27mcg-zg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah1H61b5BChnJoZkzH1VZ2ODQvOmYTMY71w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyWdR9JghLDjF8H1pjyQ1SrvpI7hMQD0jQA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUL6JxEUMLF9vvB2wq2-_VKmvUw1-eR3J49B4tiQBrj4tVz-_plQvabbE&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFC7MTgJs5HxeKj5p-mCyMnIeoWx-PF8xV4buXfXiQwZ92G2fzioZicb1&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRg4fw_NWyiGZcR8exPyuNNZLC5LspVCbQg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhdSh1nBKZS8-Atw5Z6x4C4FrbAi5sC0Seg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht92k0FECMx5KzD-8ry_UbRrXki2hAx2GZWxTnPwJGd1R8beor7qCFsua&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Mjaz0O_EaQKNImm9POuvfhgpgACKgbHX5A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHc9wIUpAZ6tGgHcuh7uMgSE73e3MiXrpIw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwa4h6ctjlKYAuYjTJg7apT7yFzeclZBCVw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVSo425yfuohV1wofyHOHfSqGSqviMo3Ung&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSO6Bq9udLzcwFq-bJmd2B9Cq6oL9hMkZMuQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMKZ1a1QxAhFHKbrcJTpbDX_qjWzlGbi5Rg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5So9rXG6_eILhT0bkgTqmiqo0Aa1kIGVr1g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczEUa2QtS5CvjAc9HFeZovoCLgtI1-Y5pYw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZVsw3fF0MAcrvGRcjrocEyV3_cLkTVjZwA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNWUV_8MU3wINXnyYHfrvEcYG-L-EYEraRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfa6rq74f35M30YTaKz0OUrCcIrTS5eCC_tg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7J6K9NBmnl8oEF8zMIy3mOwH4_xutpGAgKQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSff_LbXojRUX_oE7waI3d3-QualApp3T7w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXdfy8AVTJV2b4BQ4xisLXBpyeGu1oScXmg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZS26U1UGiE2TlPDKUHLisbG4PJlyHg_jog&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBczfXO7TJB2g9PXBFLz2wy69FOuh5mV7pg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpWc12uRczAUU_zorKo-zqLhEeZDJITSmbA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9g4q6i8P29p9OF89IpJYDXFWxnUfT5nNgQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeAXps2kgZGRgeulyGuYSEyLxLU44eFEUeg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PMHi_5Kl3X2ucjuo7D0KafekF10godIfMg&usqp=CAU'
];

const getRandomImages = (seed: string, count: number) => {
    // Create a hash from the seed combined with current timestamp for true randomness
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        const char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Add current timestamp and random factor for true randomness each time
    const randomSeed = hash + Date.now() + Math.random() * 10000;
    
    // Shuffle the array using Fisher-Yates algorithm with true randomness
    const shuffled = [...allImageUrls];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
};

const PhotoGroupMessage = ({ count, seed }: { count: number; seed: string }) => {
    const imageUrls = getRandomImages(seed, Math.min(count, 4));

    return (
        <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
            {[...Array(Math.min(count, 4))].map((_, i) => (
                <div key={i} className={`relative ${count > 4 && i === 3 ? 'brightness-50' : ''}`}>
                    <img src={imageUrls[i] || allImageUrls[0]} className="w-full h-full object-cover" alt={`photo ${i + 1}`} />
                    {count > 4 && i === 3 && (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                            +{count - 3}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const VideoGroupMessage = ({ count, seed }: { count: number; seed: string }) => {
    const imageUrls = getRandomImages(seed + '_video', Math.min(count, 4));
    
    return (
        <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
            {[...Array(Math.min(count, 4))].map((_, i) => (
                <div key={i} className={`relative ${count > 4 && i === 3 ? 'brightness-50' : ''}`}>
                    <img src={imageUrls[i] || allImageUrls[0]} className="w-full h-full object-cover" alt={`video ${i + 1}`} />
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 17.385 2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                    </svg>
                    {count > 4 && i === 3 && (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50">
                            +{count - 3}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};


// --- CHAT DATA ---

const RANDOM_NUMBER_1 = generateRandomPhoneNumber();
const RANDOM_NUMBER_2 = generateRandomPhoneNumber();
const RANDOM_NUMBER_3 = generateRandomPhoneNumber();

export const GROUP_INFO = {
  name: 'Matured mind',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie9i0r7RHBOEtDjS-UnnddqqVXsVqK574Ami7K7XYqUhmLeqL8LoODWg&s=10',
  members: `You, ${RANDOM_NUMBER_1}, ${RANDOM_NUMBER_2}, ${RANDOM_NUMBER_3}`,
};

const SENDER_1 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_1,
    senderColor: 'text-purple-500',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rJ9vLjbeuFgykZK-0skLIcHrGBs5Ef94Izo7VSlcjXN-YL6qLvFb3-hB&s=10',
};

const SENDER_2 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_2,
    senderColor: 'text-green-500',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxirzTWp5HDqGIWz2XCbhUszD0vuF_r66D-tmn_wAklIsa8rw9TUXDsvI&s=10',
};

const SENDER_3 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_3,
    senderColor: 'text-blue-500',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LHZZ96ZGRpPFQYFvtgqHKORTSO2ze2sf_kfLskUlsmUDiJRl130y6Xg&s=10',
};

export const MESSAGE_SCRIPT: Omit<Message, 'id'>[] = [
    {
        type: 'system',
        text: `${RANDOM_NUMBER_1} joined the group`,
        timestamp: '11:15 PM',
        sender: 'other',
    },
    {
        ...SENDER_1,
        text: <VoiceMessage duration="0:07" />,
        timestamp: '11:16 PM',
    },
    {
        ...SENDER_2,
        text: "You found it. Welcome to the inner circle. You see the stuff they're posting?",
        timestamp: '11:16 PM',
    },
    {
        ...SENDER_2,
        text: <PhotoGroupMessage count={5} seed="naughty_photos" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_1,
        text: <PhotoGroupMessage count={8} seed="private_pics" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_1,
        text: <VideoGroupMessage count={3} seed="exclusive_content1" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_3,
        text: "Wait till you see the videos... \uD83D\uDE0F",
        timestamp: '11:18 PM',
    },
    {
        ...SENDER_3,
        text: <VideoGroupMessage count={8} seed="naughty_videos" />,
        timestamp: '11:18 PM',
    },
    {
        ...SENDER_2,
        text: <VideoGroupMessage count={6} seed="premium_vids" />,
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_1,
        text: "This is insane! I can't believe this is real.",
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_3,
        text: <PhotoGroupMessage count={9} seed="exclusive_shots" />,
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_1,
        text: <VideoGroupMessage count={4} seed="hidden_clips" />,
        timestamp: '11:20 PM',
    },
    {
        ...SENDER_3,
        text: <VideoGroupMessage count={7} seed="secret_archive" />,
        timestamp: '11:20 PM',
    },
    {
        ...SENDER_2,
        text: "Just the beginning. The real unfiltered content is in the private feed. Only a few spots left.",
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_1,
        text: <PhotoGroupMessage count={15} seed="mega_gallery" />,
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_3,
        text: <PhotoGroupMessage count={7} seed="behind_scenes" />,
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_2,
        text: <VideoGroupMessage count={12} seed="ultimate_collection" />,
        timestamp: '11:21 PM',
    }
];


export const WHATSAPP_BG_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX/27i+19gDAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=";
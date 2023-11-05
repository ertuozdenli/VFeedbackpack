import type { Options } from '@/components/types/options';

export const defaultOptions: Options = {
    position: 'bottomRight',
    width: '350px',
    height: '240px',
    padding: '25px',
    borderRadius: '10px',
    isMinimized: false,
    active: true,
    showCloseButton: true,
    hasBorder: true,
    backgroundColor: '#fff',
    textColor: '#1a1a1a',
    buttonBackgroundColor: '#41B883',
    minimizedIconColor: '#fff',
    buttonLabelColor: '#fff',
    translateX: '0px',
    translateY: '0px',
    borderColor: '#f0f0f0',
    borderSize: '1px',
    borderType: 'solid',
    noShadow: false,
    shadowColor: '#1a1a1a08',
    labels: { buttonNext: 'Next', buttonSend: 'Send', buttonClose: 'Close', thankYou: 'Thank you!' }
};

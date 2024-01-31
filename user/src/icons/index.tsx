/* eslint-disable react/require-default-props */
import { CSSProperties } from 'react';
import Icon from '@ant-design/icons';

interface IIcons {
  style?: CSSProperties;
  rotate?: number;
  spin?: boolean;
  className?: string;
}

const ModelSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 28 28">
    <path id="call-center-agent" d="M51.14,20.906a9.759,9.759,0,0,0,1.414-5.048V9.672c-.536-12.9-18.913-12.891-19.444,0v6.187a9.759,9.759,0,0,0,1.414,5.048,8.085,8.085,0,0,0-4.949,7.443V30H56.089V28.35A8.085,8.085,0,0,0,51.14,20.906ZM34.877,9.672c.438-10.555,15.475-10.547,15.909,0v6.187a7.859,7.859,0,0,1-1.417,4.533,8.09,8.09,0,0,0-1.352-.114h-1.65v-2a6.184,6.184,0,0,0,2.651-5.074V10.6l-.787-.087a7.06,7.06,0,0,1-6.209-6L41.87,3.468l-1,.335a6.18,6.18,0,0,0-4.223,5.868v3.535a6.213,6.213,0,0,0,.063.884H34.877V9.672Zm7.954,7.954A4.415,4.415,0,0,1,39.3,15.858h0a2.55,2.55,0,0,1-.537-.841c-.3-.867-.261-.927-.261-.927h0a4.422,4.422,0,0,1-.089-.884V9.672a4.415,4.415,0,0,1,2.1-3.766,8.832,8.832,0,0,0,6.735,6.24v1.061A4.424,4.424,0,0,1,42.831,17.626Zm0,1.768a6.168,6.168,0,0,0,1.768-.258v1.142a1.768,1.768,0,0,1-3.535,0V19.136A6.166,6.166,0,0,0,42.831,19.394ZM39.96,26.762,37.908,24.71l1.712-1.642Zm1.477-3.236a3.556,3.556,0,0,0,2.787,0l-.431,4.705H41.87Zm4.6-.458,1.714,1.642L45.7,26.763Zm-11.164-7.21h2.365A6.229,6.229,0,0,0,39.3,18.281v2h-1.65a8.09,8.09,0,0,0-1.352.114A7.859,7.859,0,0,1,34.877,15.858Zm2.769,6.187h.487l-2.752,2.638,3.549,3.549H31.343A6.312,6.312,0,0,1,37.646,22.045Zm9.087,6.187,3.549-3.549-2.753-2.638h.488a6.312,6.312,0,0,1,6.3,6.187Z" transform="translate(-26.574 1)" />
  </svg>
);

const HomeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 28 28">
    <path d="M29,13.82a1,1,0,0,0-.37-.77l-12-9.82a1,1,0,0,0-1.26,0l-12,9.82a1,1,0,0,0-.37.77,1,1,0,0,0,1,1,.94.94,0,0,0,.63-.23L6,13.47V24.2A2.81,2.81,0,0,0,8.8,27h2.9a2.81,2.81,0,0,0,2.8-2.8V22.8a.8.8,0,0,1,.8-.8h1.4a.8.8,0,0,1,.8.8v1.4A2.81,2.81,0,0,0,20.3,27h2.9A2.81,2.81,0,0,0,26,24.2V13.47l1.37,1.12a.94.94,0,0,0,.63.23A1,1,0,0,0,29,13.82ZM24,24.2a.8.8,0,0,1-.8.8H20.3a.8.8,0,0,1-.8-.8V22.8A2.81,2.81,0,0,0,16.7,20H15.3a2.81,2.81,0,0,0-2.8,2.8v1.4a.8.8,0,0,1-.8.8H8.8a.8.8,0,0,1-.8-.8V11.84l8-6.55,8,6.55Z" />
  </svg>
);

const PlusSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 28 28">
    <path d="M21,15H17V11a1,1,0,0,0-2,0v4H11a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2ZM23,5H9A4,4,0,0,0,5,9V23a4,4,0,0,0,4,4H23a4,4,0,0,0,4-4V9A4,4,0,0,0,23,5Zm2,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V9A2,2,0,0,1,9,7H23a2,2,0,0,1,2,2Z" />
  </svg>
);

const MessageSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 30 30">
    <path d="M21,5H11a6,6,0,0,0-6,6V28.5a1,1,0,0,0,.81,1l.19,0a1,1,0,0,0,.93-.63A3,3,0,0,1,9.69,27H21a6,6,0,0,0,6-6V11A6,6,0,0,0,21,5Zm4,16a4,4,0,0,1-4,4H9.69A4.9,4.9,0,0,0,7,25.79V11a4,4,0,0,1,4-4H21a4,4,0,0,1,4,4Zm-6-8H13a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm-3,4H13a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z" />
  </svg>
);

const UserSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 28 28">
    <path d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm0,22a10.17,10.17,0,0,1-2.66-.37,3,3,0,0,1,5.32,0A10.17,10.17,0,0,1,16,26Zm4.52-1.09a5,5,0,0,0-9,0,10,10,0,1,1,9,0ZM16,12a4,4,0,1,0,4,4A4,4,0,0,0,16,12Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,16,18Z" />
  </svg>
);

const TickSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 25 25">
    <path d="M23,12a1,1,0,0,0-.28-.7l-1.15-1.19a1,1,0,0,0-.72-.3,1,1,0,0,0-1,1,1,1,0,0,0,.28.69l.48.5-.69.72a4,4,0,0,0-1.14,2.78,3.43,3.43,0,0,0,0,.56l.14,1-1,.17a4,4,0,0,0-2.85,2.07l-.47.88-.91-.44a3.94,3.94,0,0,0-1.75-.4,4.15,4.15,0,0,0-1.76.4l-.9.44-.47-.88A4,4,0,0,0,6,17.23l-1-.17.14-1a3.39,3.39,0,0,0,0-.55,4,4,0,0,0-1.13-2.78L3.39,12l.69-.72A4,4,0,0,0,5.22,8.5a3.43,3.43,0,0,0,0-.56L5,6.94l1-.17A4,4,0,0,0,8.87,4.7l.47-.88.91.44a3.94,3.94,0,0,0,1.75.4,4.15,4.15,0,0,0,1.76-.4l.9-.44.46.86a1,1,0,0,0,1.93-.39,1,1,0,0,0-.18-.57L16,2a1,1,0,0,0-.88-.53,1,1,0,0,0-.44.1l-1.76.87a2.14,2.14,0,0,1-.89.2,2.06,2.06,0,0,1-.88-.2L9.35,1.59A1,1,0,0,0,8,2L7.11,3.76a2,2,0,0,1-1.43,1l-1.94.34a1,1,0,0,0-.83,1,.66.66,0,0,0,0,.14l.28,2a2.64,2.64,0,0,1,0,.28,2,2,0,0,1-.57,1.39L1.28,11.31a1,1,0,0,0,0,1.38l1.38,1.43a2,2,0,0,1,.56,1.38,2.64,2.64,0,0,1,0,.28l-.28,2a.66.66,0,0,0,0,.14,1,1,0,0,0,.83,1l1.94.34a2,2,0,0,1,1.43,1L8,22a1,1,0,0,0,1.32.43l1.76-.87a2.14,2.14,0,0,1,.89-.2,2.06,2.06,0,0,1,.88.2l1.77.87a1,1,0,0,0,.44.1A1,1,0,0,0,16,22l.92-1.74a2,2,0,0,1,1.43-1l1.94-.34a1,1,0,0,0,.83-1,.66.66,0,0,0,0-.14l-.28-2a2.64,2.64,0,0,1,0-.28,2,2,0,0,1,.57-1.39l1.37-1.42A1,1,0,0,0,23,12ZM9.71,10.29A1,1,0,0,0,9,10a1,1,0,0,0-1,1,1,1,0,0,0,.29.71L12,15.41l9.71-9.7A1,1,0,0,0,22,5a1,1,0,0,0-1-1,1,1,0,0,0-.71.29L12,12.59Z" />
  </svg>
);

const ShareSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 14a1 1 0 00-1 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h4a1 1 0 000-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-3a1 1 0 00-1-1zm-1.41-8H17a9 9 0 00-9 9 1 1 0 002 0 7 7 0 017-7h1.59l-2.3 2.29A1 1 0 0016 11a1 1 0 001 1 1 1 0 00.71-.29L22.41 7l-4.7-4.71A1 1 0 0017 2a1 1 0 00-1 1 1 1 0 00.29.71z" />
  </svg>
);

const LiveIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="-16 0 512 512.00113" width="1em" fill="currentColor">
    <g>
      <path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0" />
      <path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0" />
      <path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0" />
      <path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0" />
      <path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0" />
      <path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0" />
    </g>
  </svg>
);

export const WalletSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="183.000000pt" height="160.000000pt" viewBox="0 0 183.000000 160.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
      <path d="M860 1319 c-118 -72 -248 -151 -287 -176 -69 -42 -86 -64 -63 -78 6 -4 135 69 286 161 217 130 278 163 286 153 5 -8 15 -26 23 -41 l15 -27 -171 -103 c-94 -56 -174 -108 -176 -116 -3 -7 -1 -18 5 -24 8 -8 62 20 186 96 96 58 177 106 179 106 3 0 33 -47 67 -105 42 -71 68 -105 78 -103 8 2 17 8 19 13 4 13 -208 368 -222 372 -5 1 -107 -56 -225 -128z" />
      <path d="M376 1220 c-40 -13 -74 -47 -86 -89 -6 -21 -10 -191 -10 -404 0 -398 1 -408 55 -457 l27 -25 484 -3 c535 -3 525 -4 564 61 15 24 20 50 20 110 0 42 3 77 8 78 106 9 102 1 102 195 0 163 0 164 -25 180 -27 18 -55 13 -55 -10 0 -8 9 -18 21 -21 29 -10 18 -30 -17 -30 l-29 0 -5 170 c-4 143 -8 174 -23 197 -22 33 -102 67 -119 50 -15 -15 -2 -42 21 -42 11 0 32 -11 48 -24 24 -21 28 -32 31 -95 2 -39 2 -71 -1 -71 -2 0 -21 7 -40 15 -31 13 -111 15 -502 15 l-466 0 -24 25 c-27 26 -31 54 -13 88 20 39 40 46 124 47 60 0 83 4 87 14 3 7 0 19 -6 25 -13 13 -128 13 -171 1z m483 -250 l470 0 28 -24 c24 -21 27 -31 28 -82 l0 -59 -118 -5 c-90 -4 -120 -9 -127 -20 -5 -8 -10 -70 -10 -136 0 -101 3 -124 17 -135 11 -10 50 -15 127 -16 l111 -2 3 -60 c3 -71 -19 -129 -52 -136 -35 -7 -34 -7 -504 -6 l-453 1 -24 25 -25 24 0 331 0 331 30 -16 c25 -13 97 -15 499 -15z m639 -317 l-3 -108 -160 0 -160 0 -3 94 c-1 52 -1 100 2 108 4 10 42 13 166 13 l161 0 -3 -107z" />
      <path d="M747 874 c-4 -4 -7 -15 -7 -25 0 -10 -8 -20 -18 -23 -29 -9 -61 -49 -68 -82 -6 -34 23 -80 62 -94 22 -9 24 -16 24 -70 0 -33 -4 -60 -8 -60 -14 0 -42 35 -42 53 0 10 -8 17 -20 17 -15 0 -20 -7 -20 -28 0 -36 22 -66 59 -82 18 -7 31 -21 33 -33 4 -30 42 -30 46 0 2 13 13 24 28 27 95 24 98 157 4 196 -28 11 -30 16 -30 62 0 56 14 60 40 14 8 -16 19 -28 23 -27 4 0 12 1 17 1 32 0 -8 83 -49 100 -18 7 -31 21 -33 33 -3 22 -28 34 -41 21z m-7 -139 c0 -46 -7 -54 -28 -33 -15 15 -15 51 0 66 21 21 28 13 28 -33z m90 -125 c11 -11 20 -25 20 -31 0 -19 -20 -48 -40 -59 -19 -10 -20 -7 -20 50 0 64 8 72 40 40z" />
      <path d="M1250 690 c0 -11 6 -20 14 -20 21 0 30 -20 17 -33 -9 -9 -16 -6 -30 12 -12 16 -24 22 -35 18 -40 -15 3 -80 53 -80 54 0 83 70 43 106 -26 24 -62 22 -62 -3z" />
    </g>
  </svg>
);

export const ModelIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={ModelSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const HomeIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={HomeSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const PlusIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={PlusSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const MessageIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={MessageSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const UserIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={UserSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const TickIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={TickSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const ShareIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={ShareSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

export const LiveIcon = ({
  style, rotate, spin, className
}: IIcons) => (
  <Icon component={LiveIconSvg} className={className ? `${className} anticon-custom` : 'anticon-custom'} {...{ style, rotate, spin }} />
);

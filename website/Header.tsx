import styles from 'Header.module.less';
import { useState } from 'react';
import LoadFile, { LoadFileProps } from './LoadFile';

const Logo = () => (
  <svg viewBox="0 0 1024 1024" width="18" height="18">
    <path fill="currentColor" d="M512 0L68.48 256v512L512 1024l443.52-256V256L512 0z m256 707.84c0 30.08-27.562667 55.04-65.237333 55.04-26.922667 0-57.642667-10.88-76.842667-34.56l-256-304.682667v284.16c0 30.762667-24.32 55.04-54.357333 55.04H312.32c-30.762667 0-55.04-25.6-55.04-55.04V316.16c0-30.08 26.88-55.04 64-55.04 27.562667 0 58.88 10.88 78.08 34.56l254.72 304.682667V316.16c0-30.762667 25.6-55.04 55.04-55.04h3.2c30.72 0 55.04 25.6 55.04 55.04v391.68H768z" />
  </svg>
)

const GitHub = () => (
  <svg viewBox="0 0 1024 1024" width="18" height="18">
    <path fill="currentColor" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-0.64-52.48-0.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-0.64-33.92 40.32-0.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-0.64 123.52-0.64 140.8 0 13.44 9.6 29.44 35.2 24.32A512.832 512.832 0 0 0 1024 512C1024 229.12 794.88 0 512 0z" />
  </svg>
)

type HeaderProps = LoadFileProps & {};

export default function Header(props: HeaderProps) {
  const { onLoadContent } = props;
  const [filename, setFilename] = useState('nginx.example.conf')
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.title}>
        nginx editor
      </div>
      <div className={styles.filename}>{filename}</div>
      <LoadFile
        content={props.content}
        filename={filename}
        onLoadContent={(text, evn, file) => {
          setFilename(file!.name || '')
          onLoadContent && onLoadContent(text, evn);
        }}
      />
      <a href="https://github.com/jaywcjlove/nginx-editor" target="__blank" style={{ marginLeft: 6 }}>
        <GitHub />
      </a>
    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
  <Link href="/">
    <div className="ml-2 invert-0 filter">
      <Image
        src="/assets/images/logo.svg"
        alt="epanel"
        width={80}
        height={50}
      />
    </div>
  </Link>
)

export default Logo

import { FC, ReactNode } from "react"

type Props = {
  border?: boolean
  children: ReactNode
}

const SuperCoolComponent: FC<Props> = ({ border, children }) => (
  <section>
    <h1>すごくかっこいいコンポゥネント</h1>
    {border ?
      <div className="border-solid">{children}</div> :
      <>{children}</>
    }
  </section>
)

export default SuperCoolComponent

import { FC } from "react"

type Props = {
  border?: boolean
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

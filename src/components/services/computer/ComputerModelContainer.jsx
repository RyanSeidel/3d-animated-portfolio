import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ComputerModel } from "./ComputerModel"
import { Suspense } from "react"

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense falling="loading...">
        <Stage environment="city">
        <ComputerModel/>
        </Stage>
        <OrbitControls enableZoom={false}/>
        </Suspense>
      </Canvas>
  )
}

export default ComputerModelContainer
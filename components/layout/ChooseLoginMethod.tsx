import { hoverEffectStyles } from "../../styles/hover"

interface Iprops {
  setIsAuthWithPhone: Function,
  setIsAuthWithEmail: Function
}
const ChooseLoginMethod = (props: Iprops) => {
  const {setIsAuthWithEmail, setIsAuthWithPhone} = props;

  return (
    <div className="bg-gray-100 w-4/5 h-1/2 flex flex-col justify-around items-center">
      <div className="text-center text-xl xl:text-2xl mb-4">How would you like to login?</div>

      <div className="flex flex-col gap-y-4 xl:flex-row items-center justify-around xl:gap-x-20 w-4/5 h-3/5">
        {/* phone card */}
        <div 
          className={`w-full h-full bg-gray-200 flex justify-center items-center text-xl xl:text-2xl p-6 ${hoverEffectStyles}`}
          onClick={() => setIsAuthWithPhone(true)}>
          Phone
        </div>

        {/* email card */}
        <div 
          className={`w-full h-full bg-gray-200 flex justify-center items-center text-xl xl:text-2xl p-6 ${hoverEffectStyles}`}
          onClick={() => setIsAuthWithEmail(true)}>
          Email
        </div>
      </div>


    </div>
  )
}

export default ChooseLoginMethod
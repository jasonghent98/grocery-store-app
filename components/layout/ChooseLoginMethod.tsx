
const ChooseLoginMethod = () => {
  return (
    <div className="bg-gray-100 w-4/5 h-1/2 flex flex-col justify-around items-center">
      <div className="text-center mb-6">How would you like to login?</div>

      <div className="flex bg-teal-300 flex-col gap-y-16 md:flex-row lg:flex-row xl:flex-row items-center justify-center md:gap-x-48 lg:gap-x-48 xl:gap-x-48 w-4/5 h-3/5">
        {/* phone card */}
        <div className="w-1/2 border-red-400">
          Phone testing
        </div>

        {/* email card */}
        <div className="w-1/2 border-red-400">
          Email testing
        </div>
      </div>


    </div>
  )
}

export default ChooseLoginMethod
import { MultipleLines } from "./components/util";


export const Sample = () =>
  <div className='flex flex-col h-screen'>
    <div className='h-12 bg-red-400'>MENU</div>
    <div className='flex-1 flex flex-row bg-amber-500 overflow-y-scroll border-[1px] border-red-600'>
      <div className='flex flex-col flex-[3] bg-red-600 p-2'>

        <h1>Editor</h1>
        <div className='flex-1 overflow-y-scroll bg-cyan-300'>
          <MultipleLines />

        </div>

        <h1>Timeline</h1>
        <div className='flex-1 flex flex-row overflow-y-scroll bg-cyan-300'>

          <div className='flex-none w-48'>
            <div className='bg-purple-500 w-[300px] overflow-x-hidden'>
              <MultipleLines />
            </div>
          </div>
          <div className='flex-1 bg-yellow-500'>
            <div className='bg-purple-400'>
              <MultipleLines />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col flex-[2] bg-blue-600 p-2'>
        <h1>Logs</h1>
        <div className='flex-1 overflow-y-scroll bg-cyan-300'>
          <MultipleLines lines={80} />
        </div>
      </div>

    </div>
  </div>;

import React, { FC } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import AccomplishedStep from 'public/images/progress-bar-accomplished-step.svg'


interface TargetHarianProgressBarProps {
    percent: number;
  }
  
  const TargetHarianProgressBar: FC<TargetHarianProgressBarProps> = ({ percent }) => {

    return (
        
        <div className='h-full'>

            <ProgressBar
                filledBackground='#FE8304'
                unfilledBackground='#FFF0E0'
                height='37px'
                percent={percent}
            >


                <Step>
                    {({ accomplished }: { accomplished: boolean, index: number }) => (
                        <div className="mt">
                            
                                <div className='w-full h-full relative'>
                                    <p className='absolute ml-[21px] mt-3 text-white font-medium'>
                                        0
                                    </p>
                                    <AccomplishedStep />
                                </div>
                            
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }: { accomplished: boolean, index: number }) => (
                        <div className="">
                            {accomplished ? (
                                <div className='w-full h-full relative'>
                                    <p className='absolute ml-[20px] mt-[14px] text-white font-medium text-sm '>
                                        25
                                    </p>
                                    <AccomplishedStep />
                                </div>
                            ) : (
                                <div className="w-[37px] h-[37px] rounded-full bg-c-orange-700 p-2">
                                    <div className="rounded-full bg-c-orange-100 w-full h-full">
                                        <div className={`indexedStep ${accomplished ? 'accomplished' : ''}`}>
                                            <div className='absolute mt-10 text-c-orange-700 font-bold text-3xl'>
                                                25
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }: { accomplished: boolean, index: number }) => (
                        <div className="">
                            {accomplished ? (
                                <div className='w-full h-full relative'>
                                    <p className='absolute ml-[20px] mt-[14px] text-white font-medium text-sm'>
                                        50
                                    </p>
                                    <AccomplishedStep />
                                </div>
                            ) : (
                                <div className="w-[37px] h-[37px] rounded-full bg-c-orange-700 p-2">
                                    <div className="rounded-full bg-c-orange-100 w-full h-full">
                                        <div className={`indexedStep ${accomplished ? 'accomplished' : ''}`}>
                                            <div className='absolute mt-10 text-c-orange-700 font-bold text-3xl'>
                                                50
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }: { accomplished: boolean, index: number }) => (
                        <div className="">
                            {accomplished ? (
                                <div className='w-full h-full relative'>
                                    <p className='absolute ml-[20px] mt-[14px] text-white font-medium text-sm'>
                                        75
                                    </p>
                                    <AccomplishedStep />
                                </div>
                            ) : (
                                <div className="w-[37px] h-[37px] rounded-full bg-c-orange-700 p-2">
                                    <div className="rounded-full bg-c-orange-100 w-full h-full">
                                        <div className={`indexedStep ${accomplished ? 'accomplished' : ''}`}>
                                            <div className='absolute mt-10 text-c-orange-700 font-bold text-3xl'>
                                                75
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }: { accomplished: boolean, index: number }) => (
                        <div className="">
                            {accomplished ? (
                                <div className='w-full h-full relative'>
                                    <p className='absolute ml-[19px] mt-3 text-white font-medium'>
                                       100
                                    </p>
                                    <AccomplishedStep />
                                </div>
                            ) : (
                                <div className="w-[37px] h-[37px] rounded-full bg-c-orange-700 p-2">
                                    <div className="rounded-full bg-c-orange-100 w-full h-full">
                                        <div className={`indexedStep ${accomplished ? 'accomplished' : ''}`}>
                                            <div className='absolute mt-10 text-c-orange-700 font-bold text-3xl'>
                                                100
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Step>
                


            </ProgressBar>
        </div>
    )
}


export default TargetHarianProgressBar
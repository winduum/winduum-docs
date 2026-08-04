import { createRef, useRef } from 'react'
import { Tabs, TabsList } from '@/components/tabs'

const tabs = ['All', 'Photos', 'Music', 'Documents']

export function Example() {
    const tabElements = useRef(tabs.map(() => createRef<HTMLButtonElement>())).current
    const tabPanelElements = useRef(tabs.map(() => createRef<HTMLDivElement>())).current

    return (
        <Tabs refs={{ tabElements, tabPanelElements }}>
            {({ toggleTab }) => (
                <>
                    <TabsList className="flex gap-0 p-0 bg-transparent">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                ref={tabElements[index]}
                                className="p-2 border-b-2 border-b-main/25 transition aria-selected:border-b-main/100"
                                role="tab"
                                aria-controls={`tab-${tab.toLowerCase()}`}
                                id={tab.toLowerCase()}
                                aria-selected={index === 0 ? 'true' : 'false'}
                                onClick={toggleTab}
                            >
                                {tab}
                            </button>
                        ))}
                    </TabsList>
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            ref={tabPanelElements[index]}
                            className="aria-hidden:hidden"
                            role="tabpanel"
                            aria-hidden={index === 0 ? 'false' : 'true'}
                            id={`tab-${tab.toLowerCase()}`}
                            aria-labelledby={tab.toLowerCase()}
                        >
                            {tab}
                        </div>
                    ))}
                </>
            )}
        </Tabs>
    )
}

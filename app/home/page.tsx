import React from 'react';

const Page = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#101010]">
            <h1 className="text-yellow-500 text-7xl font-extrabold flex items-baseline">
                Coming soon
                <span className="inline-flex ml-2 space-x-1">
                    <span className="animate-bounce [animation-delay:-0.3s]">.</span>
                    <span className="animate-bounce [animation-delay:-0.15s]">.</span>
                    <span className="animate-bounce">.</span>
                </span>
            </h1>
        </div>
    );
};

export default Page;
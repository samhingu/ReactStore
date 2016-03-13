import React from 'react'

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools'

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Inspector from 'redux-devtools-inspector'
import DiffMonitor from 'redux-devtools-diff-monitor'

import ChartMonitor from 'redux-devtools-chart-monitor'
// import Dispatcher from 'redux-devtools-dispatch'


// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
    // Monitors are individually adjustable with props.
    // Consult their repositories to learn about those props.
    // Here, we put LogMonitor inside a DockMonitor.
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m">
        <LogMonitor theme="nicinabox" />
        <SliderMonitor />
        <Inspector theme="tomorrow" />
        <DiffMonitor theme="tomorrow" />
        <ChartMonitor />
        
    </DockMonitor>
)

export default DevTools
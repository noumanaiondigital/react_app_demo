import React from 'react'

function OralPresentation() {
    return (
<div class="bg-gray-100 min-h-screen">
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4">GUIDELINES FOR ORAL PRESENTATION</h1>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="md:w-1/2 mr-8">
        <h2 class="text-xl font-bold mb-2">General Instructions</h2>
        <p class="mb-4">Each presenter will be given a time slot of 15 minutes in total, which is distributed as 10 minutes of presentation and 5 minutes of answering questions from the auditorium and changing of presenters at the podium. As the schedule of presentation sessions is tight it is of utmost importance that all presenters are ready and in time for their presentations. The introduction of each presenter will be kept brief when introduced by the moderator. In order for the audience to move between sessions we will keep the schedule starting time for each presentation even if the previous author do not require the full 15 minutes allowed.</p>
        <h2 class="text-xl font-bold mb-2">Upload Your Presentation</h2>
        {/* <p class="mb-4">All oral presenters/speakers are advised to upload any slides/PowerPoint Presentations you will be showing during the conference in advance to the ???. Save the file with a name that includes your oral presentation number and abstract title, according to the following format <presentation number>_<presentation title>, for example: OP148_Advanacements in Digital Forensics.ppt</p> */}
        <p class="mb-4">Upload your presentation here:  ???? </p>
        <p class="mb-4">The last day to upload your presentation is ?????</p>
      </div>

      <div class="md:w-1/2">
        <h2 class="text-xl font-bold mb-2">Technical Requirements PowerPoint Presentations</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Make sure your PowerPoint presentation is in 16:9 ratio (1,920 x 1,080 pixels).</li>
          <li>Videos must be embedded in PowerPoint.</li>
          <li>Do not use links to YouTube or other webservices in your presentations.</li>
          <li>If you use fonts not included in the Windows 10 system you should send them ahead to our Technical Team together with your presentation on ????? at the latest.</li>
        </ul>
        <h2 class="text-xl font-bold mb-2">Technical Requirements Video Formats</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Resolution: 1,920 x 1,080 pixels.</li>
          <li>Frame rate: 25 or 50 fps.</li>
          <li>Bitrate: approximately 10,000 kb/s is enough.</li>
          <li>Compression: H.264.</li>
          <li>Please only submit .mp4 files.</li>
        </ul>
        <h2 class="text-xl font-bold mb-2">Technical Requirements Audio</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>Resolution: 16-bit.</li>
          <li>Bitrate: 192–320 kb/s.</li>
          <li>Sample frequency: 44,1 kHz.</li>
        </ul>
      </div>
    </div> 
    </div>
    </div>

    )
}

export default OralPresentation
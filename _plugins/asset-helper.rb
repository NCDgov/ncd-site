require 'fileutils'

module AssetHelper
    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/uswds/dist/js/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/uswds/dist/img/', 'assets/uswds/', verbose: true)
        FileUtils.cp_r('node_modules/uswds/dist/fonts/', 'assets/uswds/', verbose: true)
        FileUtils.cp_r('node_modules/decap-cms/dist/', 'assets/decap-cms/', verbose: true)
        FileUtils.cp_r('node_modules/video.js/dist/', 'assets/video-js/', verbose: true)
        FileUtils.rm_rf('assets/video-js/examples')
        FileUtils.rm_rf('assets/video-js/dist/examples')
        FileUtils.cp_r('node_modules/videojs-youtube/dist/', 'assets/youtube-video-js/', verbose: true)
        @processed = true
    end
end

Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end

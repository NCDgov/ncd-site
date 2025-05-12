class CustomTags < Jekyll::Generator
  def generate(site)
    site.documents.each do |doc|
      if doc.data['policy_areas']
        doc.data['policy_areas'].each do |area|
          doc.tags.push(area)
        end
      end
    end
  end
end

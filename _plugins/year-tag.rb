class YearTag < Jekyll::Generator
  def generate(site)
    posts = site.collections["posts"]
    return unless posts

    posts.docs.each do |doc|
      release_date = doc.data['date']
      next unless release_date.is_a?(Date) || release_date.is_a?(Time)

    doc.data['tags'].push(release_date.year.to_s)
    end
  end
end

// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pages_list.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$pagesDataHash() => r'fc39d71b4905b7fe4412a26ec01ac2e04a84c0b7';

/// See also [_pagesData].
@ProviderFor(_pagesData)
final _pagesDataProvider = AutoDisposeProvider<List<_PageData>>.internal(
  _pagesData,
  name: r'_pagesDataProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$pagesDataHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

@Deprecated('Will be removed in 3.0. Use Ref instead')
// ignore: unused_element
typedef _PagesDataRef = AutoDisposeProviderRef<List<_PageData>>;
String _$pagesTreeHash() => r'5d7f6a96ed485617ef185a17a3dbbc9d2a9e508e';

/// See also [_pagesTree].
@ProviderFor(_pagesTree)
final _pagesTreeProvider =
    AutoDisposeProvider<RootTreeNode<_PageData>>.internal(
  _pagesTree,
  name: r'_pagesTreeProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$pagesTreeHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

@Deprecated('Will be removed in 3.0. Use Ref instead')
// ignore: unused_element
typedef _PagesTreeRef = AutoDisposeProviderRef<RootTreeNode<_PageData>>;
String _$pageNamesHash() => r'ba8e2fb564a7aa92ae49a419151c8f4f39bcf0f4';

/// See also [_pageNames].
@ProviderFor(_pageNames)
final _pageNamesProvider = AutoDisposeProvider<List<String>>.internal(
  _pageNames,
  name: r'_pageNamesProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$pageNamesHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

@Deprecated('Will be removed in 3.0. Use Ref instead')
// ignore: unused_element
typedef _PageNamesRef = AutoDisposeProviderRef<List<String>>;
String _$writersHash() => r'67ebaf51392a3c4ff731ca624a60a92b56c9c253';

/// Copied from Dart SDK
class _SystemHash {
  _SystemHash._();

  static int combine(int hash, int value) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + value);
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
    return hash ^ (hash >> 6);
  }

  static int finish(int hash) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
    // ignore: parameter_assignments
    hash = hash ^ (hash >> 11);
    return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
  }
}

/// See also [_writers].
@ProviderFor(_writers)
const _writersProvider = _WritersFamily();

/// See also [_writers].
class _WritersFamily extends Family<List<Writer>> {
  /// See also [_writers].
  const _WritersFamily();

  /// See also [_writers].
  _WritersProvider call(
    String pageId,
  ) {
    return _WritersProvider(
      pageId,
    );
  }

  @override
  _WritersProvider getProviderOverride(
    covariant _WritersProvider provider,
  ) {
    return call(
      provider.pageId,
    );
  }

  static const Iterable<ProviderOrFamily>? _dependencies = null;

  @override
  Iterable<ProviderOrFamily>? get dependencies => _dependencies;

  static const Iterable<ProviderOrFamily>? _allTransitiveDependencies = null;

  @override
  Iterable<ProviderOrFamily>? get allTransitiveDependencies =>
      _allTransitiveDependencies;

  @override
  String? get name => r'_writersProvider';
}

/// See also [_writers].
class _WritersProvider extends AutoDisposeProvider<List<Writer>> {
  /// See also [_writers].
  _WritersProvider(
    String pageId,
  ) : this._internal(
          (ref) => _writers(
            ref as _WritersRef,
            pageId,
          ),
          from: _writersProvider,
          name: r'_writersProvider',
          debugGetCreateSourceHash:
              const bool.fromEnvironment('dart.vm.product')
                  ? null
                  : _$writersHash,
          dependencies: _WritersFamily._dependencies,
          allTransitiveDependencies: _WritersFamily._allTransitiveDependencies,
          pageId: pageId,
        );

  _WritersProvider._internal(
    super._createNotifier, {
    required super.name,
    required super.dependencies,
    required super.allTransitiveDependencies,
    required super.debugGetCreateSourceHash,
    required super.from,
    required this.pageId,
  }) : super.internal();

  final String pageId;

  @override
  Override overrideWith(
    List<Writer> Function(_WritersRef provider) create,
  ) {
    return ProviderOverride(
      origin: this,
      override: _WritersProvider._internal(
        (ref) => create(ref as _WritersRef),
        from: from,
        name: null,
        dependencies: null,
        allTransitiveDependencies: null,
        debugGetCreateSourceHash: null,
        pageId: pageId,
      ),
    );
  }

  @override
  AutoDisposeProviderElement<List<Writer>> createElement() {
    return _WritersProviderElement(this);
  }

  @override
  bool operator ==(Object other) {
    return other is _WritersProvider && other.pageId == pageId;
  }

  @override
  int get hashCode {
    var hash = _SystemHash.combine(0, runtimeType.hashCode);
    hash = _SystemHash.combine(hash, pageId.hashCode);

    return _SystemHash.finish(hash);
  }
}

@Deprecated('Will be removed in 3.0. Use Ref instead')
// ignore: unused_element
mixin _WritersRef on AutoDisposeProviderRef<List<Writer>> {
  /// The parameter `pageId` of this provider.
  String get pageId;
}

class _WritersProviderElement extends AutoDisposeProviderElement<List<Writer>>
    with _WritersRef {
  _WritersProviderElement(super.provider);

  @override
  String get pageId => (origin as _WritersProvider).pageId;
}
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member, deprecated_member_use_from_same_package
